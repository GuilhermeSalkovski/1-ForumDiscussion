// props: {author: "", content:""}

export function Post(props) {
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}

// export default Post -> Default: Allows you to rename the component when importing

// Default Exports x Named Exports
