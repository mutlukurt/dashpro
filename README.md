# DashPro - Enterprise Dashboard

🌐 **[Live Demo](https://mutlukurt.github.io/dashpro/)**

A modern, responsive enterprise dashboard built with React, featuring beautiful charts, interactive components, and a sleek dark theme.

## Features

- 🎨 **Modern Dark Theme** - Sleek slate-based design with glassmorphism effects
- 📊 **Interactive Charts** - Revenue trends, user activity, and device analytics using Recharts
- 🔍 **Search & Filter** - Real-time search and sorting functionality
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔔 **Notifications** - Real-time notification system with unread indicators
- 📈 **Metrics Dashboard** - Key performance indicators with trend indicators
- 👥 **User Management** - User table with role-based status indicators
- ⚡ **Performance** - Optimized React components with smooth animations

## Tech Stack

- **React 18** - Latest React with hooks and modern patterns
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Recharts** - Composable charting library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **PostCSS** - CSS transformation tool

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashpro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
dashpro/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Dashboard.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Components

### Dashboard
The main dashboard component featuring:
- Collapsible sidebar navigation
- Header with search and notifications
- Metrics cards with trend indicators
- Interactive charts (Revenue, User Activity, Device Analytics)
- User management table
- Recent activity feed

## Customization

### Colors
The dashboard uses a custom slate color palette. You can modify colors in `tailwind.config.js`:

```javascript
colors: {
  slate: {
    // Custom slate colors
  }
}
```

### Charts
Charts are built using Recharts. You can customize chart data, colors, and configurations in the `Dashboard.js` component.

### Icons
Icons are from Lucide React. You can replace or add new icons by importing them from `lucide-react`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
