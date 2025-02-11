# Fullstack - Grocery List

## Objective

Create a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing a grocery list. Use `create-react-app` for the frontend and `express-generator` for the backend.

### Backend

1. Set up `/grocery` route, and connect router, controller, and model.

2. Create a Grocery Model with the following properties:
   - `grocery`: String
   - `purchased`: Boolean
   - `date`: Date.now

3. Implement the following functionalities in the Controller for these Routes:
   - `/get-all-groceries`
   - `/create-grocery`
   - `/update-grocery-by-id`
   - `/delete-grocery-by-id`

### Frontend

Follow a similar setup as a todo app:

1. Include an input text to add grocery list items.

2. After adding each item, display the grocery item below with 3 option buttons of edit, purchased, and delete next to it:
   - **Edit:** Toggle the grocery item to be able to edit and submit.
   - **Purchased:** Toggle the grocery item to be crossed out if it's purchased.
   - **Delete:** Delete the grocery item from the list.

3. Above the list of items, include 4 sorting options:
   - Sort by date added - Oldest to Newest
   - Sort by date added - Newest to Oldest
   - Sort by Purchased
   - Sort by Not Purchased

#### Extra Credit

Add a checkbox next to each grocery list item called priority. If checked, the item should automatically go to the top; if unchecked, it should go back down the list. Consider what is needed in both the front and back ends.

**Notes:**
- Frontend and backend should have their own repositories. Submit BOTH repository links in the essay.
- Use meaningful variable names.
- Organize components, folders, and files as needed (Do not put everything in one file).

