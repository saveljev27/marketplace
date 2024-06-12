import { categories } from '@/libs/helpers';

export default function ProductInputs() {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" placeholder="Title" />

      <label htmlFor="price">Price</label>
      <input type="number" name="price" placeholder="Price" />

      <label htmlFor="category">Category</label>
      <select name="category" id="category" defaultValue="0">
        <option disabled value="0">
          Category
        </option>
        {Object.keys(categories).map((categoryKey) => (
          <option value={categoryKey}>{categories[categoryKey]}</option>
        ))}
      </select>

      <label htmlFor="condition">Condition</label>
      <select name="condition" id="condition">
        <option selected disabled value="condition"></option>
        <option value="new">New</option>
        <option value="used-likenew">Used - Like New</option>
        <option value="used-good">Used - Good</option>
        <option value="used-fair">Used - Fair</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Description"
      ></textarea>

      <label htmlFor="contact">Conctact</label>
      <input type="text" name="contact" placeholder="Contact" />
    </>
  );
}
