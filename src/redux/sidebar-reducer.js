const initialStore = {
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
};

const sidebarReducer = (state = initialStore, action) => {
  return state;
};

export default sidebarReducer;
