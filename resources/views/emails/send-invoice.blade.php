<x-mail::message>

Dear {{ $invoice->client_name }},

We hope this message finds you well. We would like to extend our heartfelt gratitude for choosing 3DG Realty Development for your recent property purchase. It has been our pleasure to assist you throughout the process, and we are delighted that you have found the perfect property to call home.

Attached to this email, you will find your invoice & ledger.

Once again, thank you for choosing 3DG Realty Development. We truly appreciate your business and look forward to serving you in the future.

<x-mail::button :url="'https://3dgrealtydevelopment.com/'">
Visit Our Website
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
