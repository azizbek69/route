import React, { Fragment } from 'react'
// import Cover from "./../images/cover.jpeg"
import Card from '../components/Card';
import { PostsData } from "../init-posts"

export default function About() {
    const post = PostsData.map(post => {
        return (
            <Fragment key={post.id}>
                <Card title={post.title} desc={post.body} />
            </Fragment>
        )
    })

    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="row py-4">
                        {post}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
