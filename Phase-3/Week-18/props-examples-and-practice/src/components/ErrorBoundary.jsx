// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false,
//     };
//   }

//   static getDerivedStateFromError(error) {
//     return {
//       hasError: true,
//     };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log("Error:", error);
//     console.log("Error information:", errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>;
//     }

//     return this.props.children;
//   }
// }

// {/* <ErrorBoundary>
//   <StudentManagement />
// </ErrorBoundary>; */}

// export default ErrorBoundary;

// // error boundary with usefull fallback
// if (this.state.hasError) {
//   return (
//     <div>
//       <h2>Unable to display students.</h2>

//       <p>Something went wrong while loading this section.</p>

//       <button onClick={() => window.location.reload()}>Try Again</button>
//     </div>
//   );
// }
