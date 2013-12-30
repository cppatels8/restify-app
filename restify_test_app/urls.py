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

    # url(r'^$', 'restify_test_app.views.home', name='home'),
    # url(r'^restify_test_app/', include('restify_test_app.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
