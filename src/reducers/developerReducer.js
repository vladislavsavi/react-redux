const about = {
  Iam: 'Savin Vladislav'
};

export default function (state = about, action) {
  switch (action.type) {
    case 'DEV_CREATED':
      return action.payload;
    default:
      return state;
  }
}
