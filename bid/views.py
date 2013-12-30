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
    data = [
    {
      "band": 7,
      "condidateEmailId": "chandan.patel@hashedin.com",
      "condidateName": "Prateek Kumar",
      "contactNumber": "8948383994",
      "createdAt": "2013-12-30T13:03:43",
      "feedback": "Not Added",
      "id": "52c16f2f9334a766c8ecc1c0",
      "interviewFeedbackUri": "Url",
      "interviewStatus": "open",
      "interviewTime": "2014-01-02 13:00",
      "interviewType": "Telephonic",
      "interviewerEmailId": "bittu.kumar@hashedin.com",
      "modifiedAt": "2013-12-30T13:03:43",
      "owner": "52c16d479334a766c8ecc1bf",
      "resource_uri": "",
      "result": "No Updated",
      "roundNumber": "1st"
    }
  ]
    return render(request, 'interview_detail.html', {"interview": data})

def your_bid(request):
    return render(request, 'your-bids.html')

