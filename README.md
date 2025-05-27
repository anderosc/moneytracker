
# MoneyTracker

**MoneyTracker** is a web application that allows users to manage their income and expenses, add and delete categories, and visualize data in graphical form. The app provides an easy-to-use interface for tracking financial activities over time.

LIVE DEMO --> <a href="https://moneytracker-7d066.web.app/" target="_blank">Link to demo webpage</a>
## Features

- **Login**: Users can log in to their account and start managing their financial data.
- **Income and Expense Management**: Users can view their income and expenses, add new entries, edit existing ones, and delete them.
- **Category Management**: Users can add new categories for income and expenses, and also delete categories when needed.
- **Graphical Visualization**: The application displays the data on a graph, helping users visualize their income and expenses over time.
- **Data Storage**: Currently, data is stored and managed using **Context API** as there is no backend service in place yet. Data is not permanently stored on a server, but rather in the application's state during the session.

## Installation

To run this application locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/anderosc/moneytracker
   ```
   
2. Navigate to the project directory:
   ```bash
   cd finance-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at your localhost.

## Usage

### Login:
- Users must first log in to access their finance dashboard. Just klick LOG IN

### View Income and Expenses:
- After logging in, users can view their income and expenses, which are listed with details like amount, category, date, and comments.

### Add/Edit/Delete Income and Expenses:
- Users can add new income and expense entries using the provided forms.
- Existing entries can be edited or deleted as needed.

### Category Management:
- New categories can be added to better organize income and expenses.
- Users can also delete categories that are no longer needed.

### Graphical Visualization:
- The application provides a graph to display income and expense data visually, helping users track their financial activities over time.

### Data Storage:
- Since the backend is still under development, the data is stored in the app's context. This means the data will be lost when the page is refreshed or when the session ends.

## Technologies Used

- **React** for building the user interface.
- **Context API** for managing application state.
- **React Router** for navigation.
- **MUI UI** for website visualization and graphs.

## Future Improvements

- **Backend Integration**: The next step is to integrate a backend to persist data, allowing users to store their financial information across sessions.
- **Authentication**: Implement a fully functional authentication system to manage user accounts and protect financial data.
- **Advanced Reporting**: Add more advanced features such as monthly or yearly financial reports, budget tracking, etc.
