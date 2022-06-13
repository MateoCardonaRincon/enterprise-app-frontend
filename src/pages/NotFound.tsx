import React from 'react'

type Props = {}

const NotFound: React.FC<Props> = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <h1>😭404😪</h1>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <h3>🔨Page not found🔧</h3>
                </div>
            </div>
        </div >
    )
}

export default NotFound