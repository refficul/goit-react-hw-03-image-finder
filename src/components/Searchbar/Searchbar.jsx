import { Component } from 'react';
import {
  SearchBarWrapper,
  SearchForm,
  SearchButton,
  FormInput,
} from './Searchbar.styled';

// export class SearchBar extends Component {
//   state = {
//     query: '',
//     page: 1,
//   };

//   handleQueryChange = evt => {
//     this.setState({ query: evt.currentTarget.value.trim() });
//     console.log(this.state.query);
//   };

//   handleSubmitForm = evt => {
//     evt.preventDefault();
//     const {onSubmit} = this.props;
//     onSubmit(this.state.query);
//   }

//   render() {
//     return (
//       <SearchBarWrapper>
//         <SearchForm onChange={this.handleSubmitForm}>
//           <SearchButton type="submit">Search</SearchButton>
//           <FormInput
//             value={this.state.query}
//             onChange={this.handleQueryChange}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </SearchBarWrapper>
//     );
//   }
// }

export class SearchBar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
    console.log(this.state.query);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      // toast.error('Please enter a search value');
      return;
    }
    
    onSubmit(query);
  };

  render() {
    const { handleSubmit, handleSearchQueryChange } = this;
    const { query } = this.state;

    return (
      <SearchBarWrapper direction="horizontal" className="justify-content-center mt-5">
        <SearchForm className="d-flex" onSubmit={handleSubmit}>
        <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <FormInput
            name="query"
            className="me-auto"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearchQueryChange}
            value={query}
          />
          
        </SearchForm>
      </SearchBarWrapper>
    );
  }
}