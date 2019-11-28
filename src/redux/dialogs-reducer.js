const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 1,
        message: action.newMessageText,
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = newMessageText => {
  return { type: SEND_MESSAGE, newMessageText };
};

export default dialogsReducer;
