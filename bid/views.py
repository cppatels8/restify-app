from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt

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
    return render(request, 'interview_detail.html')

def your_bid(request):
    return render(request, 'your-bids.html')

