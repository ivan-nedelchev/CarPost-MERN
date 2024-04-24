// export const checkSession = () => {
//   return function (req, res, next) {
//     const user = req.session.user;
//     if (user && user.id) {
//       console.log("logged in - no problem");
//       next();
//     } else {
//       res.status(401).send("Unauthorized");
//     }
//   };
// }
