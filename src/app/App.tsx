import NavigationRoot from './AppNavigation';
import GlobalProviders from './GlobalProviders';

function App() {
    return (
        <GlobalProviders>
            <NavigationRoot />
        </GlobalProviders>
    );
}

export default App;
