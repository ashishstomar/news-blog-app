# NewsBlog - A News Article Web App

Welcome to the **NewsBlog** project! This is a responsive news article website built with React and Tailwind CSS. The application provides a modern, user-friendly interface to display news articles from various categories and allows users to view full articles on dedicated pages.

#### Flutter App Screenshots

<table>
  <tr>
    <td>First Screen Page - PC</td>
     <td>Full Article - Tablet</td>
     <td>Firt Screen Page - Mobile</td>
  </tr>
  <tr>
    <td><img src="src\assets\localhost_5174_.png" width=470 height=auto></td>
    <td><img src="src\assets\localhost_5174_ 1.png" width=470 height=auto></td>
    <td><img src="src\assets\localhost_5174_(Pixel 7) (1).png" width=270 height=auto></td>
  </tr>
 </table>

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Homepage**: Displays a list of news articles with pagination.
- **Category Pages**: View articles categorized by technology, finance, sports, trending, etc.
- **Article Page**: Shows the full article view with a back button to navigate to the category page.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Dynamic Routing**: Uses React Router for navigation between articles and categories.
- **Shimmer UI**: Displays a shimmer effect while data is being fetched.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Routing library for navigation.
- **SwiperJS**: Carousel library for featured articles.
- **News API**: API for fetching news articles.

## Getting Started

To get started with the NewsArticle project, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/news-blog.git
   ```

2. Navigate into the project directory:

   ```bash
   cd news-blog-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add your API key:

   ```
   POST_API = "YourAPIKey"
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- **Homepage**: View a paginated list of news articles. Click "Read more" to view the full article.
- **Category Pages**: Navigate to different categories to view articles related to technology, finance, sports, trending, etc.
- **Article Page**: Read the full article and use the back button to return to the category page.

## Contributing

We welcome contributions to the NewsArticle project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
