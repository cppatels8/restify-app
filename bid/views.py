from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
import requests
import json
@csrf_exempt
def login_user(request):
    return render(request, 'registration.html')

@csrf_exempt
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def admin(request):
    return render(request, 'admin.html')

@csrf_exempt
def viewInterviewDetail(request, interview_id):
    accessToken = request.META.get('HTTP_COOKIE', None)
    url = "http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment/{0}?accessToken={1}".format(interview_id, accessToken)
    resp = requests.get(url=url)
    api_data = json.loads(resp.content)
    data = api_data['data']
    return render(request, 'interview_detail.html', {"interview": [data]})

def your_bid(request):
    return render(request, 'your-bids.html')

