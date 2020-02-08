class EssayController < ApplicationController
  
  # GET /essay/{user_id}
  def show
    @essay = Essay.find_by!(user_id: params[:_user_id])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Essay not found' }, status: :not_found
    else  
      render json: @essay, status: :ok
  end

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

  # DELETE /essay/{user_id}
  def destroy
    Chunk.where(user_id: 3).each do |c|
        c.destroy!
    end
    @essay = Essay.find_by!(user_id: params[:_user_id])
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Essay not found' }, status: :not_found
    else  
        @essay.destroy
  end  

    private

    def essay_params
        params.permit(
          :user_id, :body
        )
    end
end
