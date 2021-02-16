import logo from './logo.svg';
import './App.css';
import catImage from './cat.jpg';
import catImage2 from './puppy.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="display-1" style={{color: "red", textAlign: "left"}}>Testing Bootstrap</p>
                <div className="form-group">
                    <label className="form-label">Name: </label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary m-3" />
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={catImage} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={catImage2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
