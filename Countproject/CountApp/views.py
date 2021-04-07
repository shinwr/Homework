from django.shortcuts import render

# Create your views here.
def count(request):
    return render(request, 'count.html')

def result(request):
    text = request.POST['text']
    total_len = len(text)
    total_text = text
    total_except = len(text.replace(' ', ''))
    word = len(text.split(' '))

    return render(request, 'result.html', {'total_len' : total_len, 'total_text': text, 'total_except': len(text.replace(' ', '')), 'word':len(text.split(' ')), })