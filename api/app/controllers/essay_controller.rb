class EssayController < ApplicationController
  
  # POST /essay
  def create
    @essay = Essay.new(essay_params)
    if User.find(@essay.user_id).nil?
      render json: { errors: "that user does not exist" },
             status: :unprocessable_entity
    end         
    if @essay.save
      render json: @essay, status: :created
    else
      render json: { errors: @essay.errors.full_messages },
             status: :unprocessable_entity
    end
  end


    private

    def essay_params
        params.permit(
          :user_id, :body
        )
    end
end
