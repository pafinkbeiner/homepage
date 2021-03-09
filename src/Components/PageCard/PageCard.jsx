import React from 'react'

const PageCard = (props) => {

    const {color, description, title, url} = props.page;

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {description}
                {/* <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a> */}
                <br/>
                <a href={url}>Zu {title}</a>
                {/* <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
            </div>
            <footer className="card-footer">
                <a onClick={() => {}} className="card-footer-item">Save</a>
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
            </footer>
        </div>
    )
}

export default PageCard
