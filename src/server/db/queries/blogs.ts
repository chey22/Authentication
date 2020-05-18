import { Query } from '../index';

const allBlogs = async () => Query(`SELECT * FROM blogs`)

const oneBlog = async (id: number) => Query(`SELECT * FROM blogs WHERE id = ${id}`);

// POST a new Blog, with at least one tag
// Hint: Your blog insert will result in an id response from mysql, use that to insert your blog id and tag id into your blogtags table!
const postBlog = async (title: string, content: string) => Query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`);

const editBlog = async (title: string, content: string, id: number) => Query(`UPDATE blogs SET title = '${title}', content = '${content}'`);

const deleteBlog = async (id: number) => Query(`DELETE FROM blogs WHERE id = ${id}`)

export default {
    allBlogs,
    oneBlog,
    postBlog,
    editBlog,
    deleteBlog
}