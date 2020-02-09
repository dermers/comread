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
        allchunks = Chunk.where(user_id: params[:_user_id])
                        .order(:index).all
        render json: { chunks: allchunks },
            status: :ok
    end 

    # GET /mychunks/{reviewer_id}
    def my_chunks
        mychunks = Chunk.where(reviewer_id: params[:_reviewer_id])
                        .order(created_at: :desc).all
        render json: { chunks: mychunks },
            status: :ok
    end

    # POST /chunkrating/{chunk_id}
    def update_rating
        c = Chunk.find(params[:_chunk_id])
        c.rating = true
        c.save!
        render json:
            c, status: :ok
    end    
end