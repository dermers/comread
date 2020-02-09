class ChunkController < ApplicationController
    # GET /reviewedchunks/{user_id}
    def show_all
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

    # POST /chunkrating/{chunk_id}
    def update_rating
        c = Chunk.find(params[:_chunk_id])
        c.rating = true
        c.save!
        return json: c, status: :ok
    end    
end


