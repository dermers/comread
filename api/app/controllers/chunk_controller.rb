class ChunkController < ApplicationController
    before_action :authorize_request
    # GET /reviewedchunks/{user_id}
    def show_all_reviewed
        render json: 
            Chunk.where(user_id: params[:_user_id])
                 .where.not(feedback: nil)
                 .order(:index).all,
            status: :ok
    end
    
    # GET /allchunks/{user_id}
    def show_all
        render json: 
            Chunk.where(user_id: params[:_user_id])
                .order(:index).all,
            status: :ok
    end 

    # GET /mychunks/{reviewer_id}
    def my_chunks
        render json:
            Chunk.where(reviewer_id: params[:_reviewer_id])
                .order(created_at: :desc).all,
            status: :ok

    # POST /chunkrating/{chunk_id}
    def update_rating
        c = Chunk.find(params[:_chunk_id])
        c.rating = true
        c.save!
        return json: c, status: :ok
    end    
end


