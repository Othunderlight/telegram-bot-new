from django.db import models
from django.utils import timezone

class TelegramAccount(models.Model):
    api_id = models.CharField(max_length=255)
    api_hash = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    session_string = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Account: {self.phone_number}'

class TelegramGroup(models.Model):
    group_id = models.BigIntegerField(unique=True)
    title = models.CharField(max_length=255)
    username = models.CharField(max_length=255, null=True, blank=True)
    member_count = models.IntegerField(default=0)
    is_monitored = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class TelegramMessage(models.Model):
    group = models.ForeignKey(TelegramGroup, on_delete=models.CASCADE)
    message_id = models.BigIntegerField()
    sender_id = models.BigIntegerField(null=True)
    sender_name = models.CharField(max_length=255, null=True)
    content = models.TextField()
    sent_at = models.DateTimeField()
    collected_at = models.DateTimeField(default=timezone.now)

    class Meta:
        unique_together = ('group', 'message_id')

    def __str__(self):
        return f'Message {self.message_id} from {self.sender_name}'