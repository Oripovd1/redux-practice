import React from 'react'

export default function Post({ post }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Post Title {post}</h5>
            </div>
        </div>
    )
}