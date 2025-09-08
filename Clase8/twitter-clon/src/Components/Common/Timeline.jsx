import Post from "./Post";

export default function Timeline ({posts}) {
    return (
        <div>
            {posts.map(
                ({id, content, author}, index) =>
                <Post key={`${id}-${index}`} {...{id, content, author}} />
            )}

        </div>

    )

}