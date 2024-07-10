export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Home: undefined;
    GameDetail: { game: { id: string; title: string; description: string; image: string } };
    GameDashboard: { game: { id: string; title: string; description: string; image: string } }; // Define GameDashboard here
};
