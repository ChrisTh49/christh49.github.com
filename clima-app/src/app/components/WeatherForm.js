import React from "react"

const WeatherForm = (props) => {
    return  (
        <div className='form-body'>
            <h2 className="title">Weather by ChrisTh</h2>
            <div className='card card-body form'>
                <form onSubmit={ props.getWeather }>
                    <div className="form-group mb-3">
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="Your city name" 
                            className="form-control"
                            onChange= { props.clearForm }
                            autoFocus />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            name="country" 
                            placeholder="Your country name" 
                            onChange= { props.clearForm }
                            className="form-control" />
                    </div>
                    <div className="d-grid gap-2 button-div">
                        <button className="btn btn-danger mb-3">
                            Get Weather
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WeatherForm;