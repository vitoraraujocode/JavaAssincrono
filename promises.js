const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject(new Error("error in login"));
    }
    console.log(`User logged !`);
    resolve({ email });
  });
};
const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos");
      callback(["video1, video2, video3"]);
    }, 2000);
  });
};

const getVideosDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideosDetails");
      resolve({ title: "video title" });
    }, 2500);
  });
};

loginUser("felipe@gmail.com", "1234567")
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideosDetails(videos[0]))
  .then((videoDetails) => console.log({ videoDetails }))
  .catch((error) => console.log({ error }));

//promiseAll
const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Videos from YouTube");
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Posts from Facebook");
  }, 3000);
});
Promise.all([yt, fb]).then((results) => {
  console.log({ results });
});
