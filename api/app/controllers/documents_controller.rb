class DocumentsController < ApplicationController
    def document_params
        params.require(:document).permit(:name, :path))
    end
end
