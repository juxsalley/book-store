import PropTypes from 'prop-types';
import './Book.css';

const Book = (books) => {
  const { book } = books;
  const removeBook = (id) => id;
  return (
    <tr>
      <td>{book.id.slice(0, 2)}</td>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.year}</td>
      <td className="action-column">
        {' '}
        <button className="remove-btn" type="button" onClick={() => removeBook(book.id)}>X</button>
        {' '}
      </td>
    </tr>
  );
};

Book.propType = {
  book: PropTypes.object,
};

export default Book;
