from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    (r'^login/$', 'bid.views.login_user'),
    (r'^home/$', 'bid.views.index'),
    (r'^interviews/(?P<interview_id>[\w]+)$', 'bid.views.viewInterviewDetail'),
    (r'^your-bid/$', 'bid.views.your_bid'),
    (r'^interviewer-dashboard', 'bid.views.viewInterviewerDashboard'),
    (r'^hr-dashboard', 'bid.views.index')
)
