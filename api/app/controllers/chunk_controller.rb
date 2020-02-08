class ChunkController < ApplicationController
    # GET /allchunks/{user_id}
    def show_all
        render json: 
            Chunk.where(user_id: params[:_user_id])
                 .where.not(reviewer_id: nil).all
    end    
end


