let state = {
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Юлия",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      },
      {
        id: 2,
        name: "Клавдия",
        img:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png"
      },
      {
        id: 3,
        name: "Петр",
        img:
          "https://i.pinimg.com/originals/17/61/74/176174d8b50a0de17ae5215480949f85.jpg"
      },
      {
        id: 4,
        name: "Арсений",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cG__6BAcV9dT4sRTEB_wN6fZblCgSkDksiEeiN5W7YFxycgi"
      },
      {
        id: 5,
        name: "Сергей",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauF_FCWfrCJfSqaApuf-qLkL0NL1A2LM5cX-UloTsZ7344ePy"
      }
    ],

    messages: [
      {
        id: 1,
        message: "Hello! How are you?",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      },
      {
        id: 2,
        message: "Hey! I`m fine, thanks. And you!",
        img:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png"
      },
      {
        id: 3,
        message: "I`m okay)",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      }
    ]
  },
  profilePage: {
    posts: [
      { id: 1, title: "Cats", likeCounter: 15 },
      { id: 2, title: "Dogs", likeCounter: 13 },
      { id: 3, title: "Birds", likeCounter: 16 },
      { id: 3, title: "Bears", likeCounter: 12 }
    ]
  },
  navBarPage: {
    navLinks: [
      {
        path: "/profile",
        title: "Profile"
      },
      {
        path: "/dialogs",
        title: "Messages"
      },
      {
        path: "/news",
        title: "News"
      },
      {
        path: "/music",
        title: "Music"
      },
      {
        path: "/settings",
        title: "Settings"
      }
    ],
    friends: [
      {
        name: "Klavdia",
        avatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      },
      {
        name: "Piter",
        avatar:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png"
      },
      {
        name: "Masha",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauF_FCWfrCJfSqaApuf-qLkL0NL1A2LM5cX-UloTsZ7344ePy"
      }
    ]
  }
};

export const addPost = postMessage => {
  const newPost = {
    id: 5,
    title: postMessage,
    likeCounter: 5
  };
  state.profilePage.posts.push(newPost);
};

export default state;
