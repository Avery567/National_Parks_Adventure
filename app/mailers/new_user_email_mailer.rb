class NewUserEmailMailer < ApplicationMailer
    def notify_user
        mail(to: current_user.email, subject:"Welcome to National Park Adventures")
    end
end
