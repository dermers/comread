class ChunkController < ApplicationController

    # POST /chunk
    def create
        @chunk = Chunk.new(chunk_params)
        if Essay.find(@chunk.essay_id).nil?
            render json: { errors: "that user does not exist" },
                   status: :unprocessable_entity
        end
        if @chunk.save
            render json: @chunk, status: :created
        else
            render json: { errors: @chunk.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    

    private

    def chunk_params
        params.require(:essay_id, :body).permit(:feedback, :reviewer_id)
    end
end


