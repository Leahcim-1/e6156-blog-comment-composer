export default class CommentService {
  constructor(commentReq) {
    this.commentReq = commentReq
  }

  async getAllComments() {
    return this.commentReq.get('/api/comments')
  }

  async getCommentsByBlogId(id) {
    return this.commentReq.get(`/api/comments/blog/${id}`)
  }

  async postComment(data) {
    return this.commentReq.post(`/api/comments/`, { data })
  }
}