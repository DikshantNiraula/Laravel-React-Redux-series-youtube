import React, { Fragment,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './layouts/Navbar';
import PostForm from './PostForm';
import Posts from './posts/Posts'
import store from '../store';
import {Provider} from 'react-redux';
import {getPosts} from '../actions/post';


const App = () => {
    useEffect(() => {
        store.dispatch(getPosts());
    }, []);
    return (
        <Provider store={store}>
        <Fragment>
            <Navbar/>
            <div className="container">
            <PostForm/>
            <Posts />
            </div>
        </Fragment>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
