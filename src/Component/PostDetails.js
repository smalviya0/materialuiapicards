// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Typography, Card, CardContent } from "@mui/material";

// // Component to display the details of a single post
// function PostDetails() {
//   const { state } = useLocation();
  
//   if (!state.post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex m-auto my-20 justify-center items-center">
//       <Card sx={{ maxWidth: 345 }}>
//         <CardContent>
//           <Typography variant="h4" component="h4" sx={{ mb: 1 }}>
//             {state.post.title}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             {state.post.body}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default PostDetails;
import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

// Component to display the details of a single post
function PostDetails() {
  const { state } = useLocation();
  
  if (!state || !state.post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex m-auto my-20 justify-center items-center">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h4" color="text.primary" component="h4">
            {state.post.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {state.post.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostDetails;
