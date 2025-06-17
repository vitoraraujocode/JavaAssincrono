const axious = require("axios");
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

//loginUser("felipe@gmail.com", "1234567")
//.then((user) => getUserVideos(user.email))
//.then((videos) => getVideosDetails(videos[0]))
//.then((videoDetails) => console.log({ videoDetails }))
//.catch((error) => console.log({ error }));

const displayUser = async () => {
  try {
    const user = await loginUser("Felipe@gmail.com", "1234567");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideosDetails(videos[0]);
    console.log({ videoDetails });
  } catch (error) {
    console.log({ error });
  }
};
//displayUser();
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log({ data: response.data });
  })
  .catch((error) => {
    console.log({ error });
  });
const fetchApi = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};
fetchApi();
