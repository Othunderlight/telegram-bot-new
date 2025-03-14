from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from telegram.models import TelegramAccount, TelegramGroup, TelegramMessage
from .serializers import TelegramAccountSerializer, TelegramGroupSerializer, TelegramMessageSerializer

class TelegramAccountViewSet(viewsets.ModelViewSet):
    queryset = TelegramAccount.objects.all()
    serializer_class = TelegramAccountSerializer

    @action(detail=True, methods=['post'])
    def toggle_active(self, request, pk=None):
        account = self.get_object()
        account.is_active = not account.is_active
        account.save()
        return Response({'status': 'success'})

class TelegramGroupViewSet(viewsets.ModelViewSet):
    queryset = TelegramGroup.objects.all()
    serializer_class = TelegramGroupSerializer

    @action(detail=True, methods=['post'])
    def toggle_monitoring(self, request, pk=None):
        group = self.get_object()
        group.is_monitored = not group.is_monitored
        group.save()
        return Response({'status': 'success'})

class TelegramMessageViewSet(viewsets.ModelViewSet):
    queryset = TelegramMessage.objects.all()
    serializer_class = TelegramMessageSerializer
    
    def get_queryset(self):
        queryset = TelegramMessage.objects.all()
        group_id = self.request.query_params.get('group_id', None)
        if group_id is not None:
            queryset = queryset.filter(group_id=group_id)
        return queryset.order_by('-sent_at')