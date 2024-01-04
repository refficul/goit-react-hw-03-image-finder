import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Searchbar/Searchbar';
import { getImages } from 'api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    totalHits: 0,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });

        const { hits, totalHits } = await getImages(
          this.state.query,
          this.state.page
        );

        if (totalHits === 0) {
          this.setState({ loading: false });
          return;
        }

        this.setState(prevState => ({
          images: this.state.page === 1 ? hits : [...prevState.images, ...hits],
          totalHits:
            this.state.page === 1
              ? totalHits - hits.length
              : totalHits - [...prevState.images, ...hits].length,
        }));

        this.setState({ loading: false });
      } catch (error) {
        alert('Oops! Something went wrong :(');
      } 
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.loading && <Loader />}
        {!!this.state.totalHits && <LoadMore  onClick={this.handleLoadMore} />}
      </div>
    );
  }
}