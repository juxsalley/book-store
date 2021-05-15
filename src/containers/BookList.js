/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import './BookList.css';

const BookList = ({
  books, onclick, filter, onchangeFilter,
}) => {
  const handleFilterChange = (e) => {
    onchangeFilter(e.target.value);
  };

  return (
    <div className="main-book-list">
      <div className="fliter-div">

        <CategoryFilter onchange={handleFilterChange} />
      </div>
      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>CATEGORY</th>
            <th>YEAR</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {filter.filter === 'all'
            ? books.map((book, index) => <Book book={book} key={index.toString()} onclick={onclick} />)
            : books.filter((ele) => ele.category === filter.filter).map((book, index) => <Book book={book} key={index.toString()} onclick={onclick} />)}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape),
  onclick: PropTypes.func.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }).isRequired,

};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = {
  onclick: (id) => removeBook(id),
  onchangeFilter: (filter) => changeFilter(filter),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
