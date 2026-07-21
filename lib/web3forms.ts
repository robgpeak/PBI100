// Web3Forms delivers each submission to the address its access key was
// registered to; there is no per-submission recipient override, so each
// destination inbox needs its own key.
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/** Registered to inquiry@pbi100.com. */
export const INQUIRY_ACCESS_KEY = 'b1f43de9-ed7e-4d9a-bda3-5b13dd7414ef';

/** Registered to nominations@pbi100.com. */
export const NOMINATIONS_ACCESS_KEY = '5a67cfa1-bc21-46a8-b95a-a0d9558684fb';

/**
 * Access keys are public by design — a key only ever delivers to the address it
 * was registered to, so shipping one in client code grants no useful power to
 * anyone who reads it.
 */
export async function submitToWeb3Forms({
  formData,
  accessKey,
  subject,
  replyTo,
}: {
  formData: FormData;
  accessKey: string;
  subject: string;
  /**
   * The submitter's address, so hitting Reply in the notification email goes
   * straight back to them. Web3Forms only auto-detects a field named exactly
   * `email`; our fields are labelled ("Email", "Nominator email"), so we set
   * the header explicitly rather than relying on that.
   */
  replyTo?: string;
}): Promise<{ ok: true } | { ok: false; message: string }> {
  formData.append('access_key', accessKey);
  formData.append('subject', subject);
  formData.append('from_name', 'Palm Beach Influence 100 website');
  if (replyTo) formData.append('replyto', replyTo);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: formData });
    const result = await response.json();

    if (response.ok && result.success) return { ok: true };
    return { ok: false, message: result.message || 'The message could not be sent.' };
  } catch {
    return { ok: false, message: 'We could not reach the network. Please check your connection.' };
  }
}
