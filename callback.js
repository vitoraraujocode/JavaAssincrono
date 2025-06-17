const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    const error = true;
    if (error) {
      return onError(new Error("error in login"));
    }
    console.log(`User logged !`);
    onSucess({ email });
  }, 1500);
  console.log("After setTimeout");
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video1, video2, video3"]);
  }, 2000);
};

const getVideosDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500);
};

const user = loginUser(
  "felipe@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
      getVideosDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails });
      });
    });
  },
  (error) => {
    console.log({ error });
  }
);
//console.log({ user });
