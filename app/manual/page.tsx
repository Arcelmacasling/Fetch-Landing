import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ManualPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Fetch User Manual
          </div>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-36">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center tracking-tight">Fetch User Manual</h1>
        <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Welcome to Fetch! Whether you&apos;re a customer looking to get things done or a rider ready to earn, this guide will help you get started quickly and easily.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Getting Started</h2>
          <p className="text-slate-600 mb-4">Before using the app, you need to create an account and set up your profile.</p>
          <ol className="list-decimal list-inside space-y-3 text-slate-700">
            <li>Open the app and choose to <strong>Sign In</strong> or <strong>Create an Account</strong>.</li>
            <li>Fill out your Profile basics including your Name, Phone Number, and a clear Profile Photo.</li>
          </ol>
          <div className="mt-4 bg-rose-50 text-rose-800 p-4 rounded-lg text-sm border border-rose-100">
            <strong>Tip:</strong> Keep your contact information accurate so riders or customers can easily reach you.
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Customer Guide</h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold mb-3">Creating a Task</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Go to the <strong>Home</strong> tab.</li>
                <li>Tap to create a new task and specify the pickup and drop-off locations.</li>
                <li>Set your budget and confirm the fee flow to post your task for riders.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Using PasaBuy</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the <strong>PasaBuy feed</strong> on the Home screen to see what local riders are offering.</li>
                <li>Tap on a rider&apos;s post and choose to <strong>Avail</strong> the item.</li>
                <li>Once accepted, open the transaction chat.</li>
                <li>Through chat, you can send messages, share your live location, and upload an image of your payment proof.</li>
              </ol>
              <div className="mt-3 text-sm text-slate-600 italic">Tip: Always upload a clear screenshot of your payment proof for faster confirmation!</div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Managing Your Activity</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the <strong>Activity</strong> tab to monitor updates on your current tasks.</li>
                <li>Open the tracking view when prompted to see the rider&apos;s progress.</li>
                <li>Visit your <strong>Transaction History</strong> to review past avails and completed tasks.</li>
                <li>Use the <strong>Profile</strong> tab anytime to update your information and photo.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Rider Guide</h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold mb-3">Verification</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Sign in and ensure your profile is fully set up.</li>
                <li>Go to the <strong>Verification</strong> page and submit your required documents.</li>
                <li>Check your status: it will show as <i>Pending, Verified,</i> or <i>Rejected</i>. You must be Verified to accept tasks.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Handling Standard Tasks</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the pending task feed and <strong>Accept</strong> a task that fits your route.</li>
                <li>Follow the task lifecycle in the tracking menu and update your status accurately:
                  <ul className="list-disc pl-10 mt-2 space-y-1 text-slate-600">
                    <li>Accepted</li>
                    <li>Arrived at pickup</li>
                    <li>In progress (heading to drop-off)</li>
                    <li>Arrived at drop-off</li>
                    <li>Completed</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Hosting a PasaBuy</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Create a PasaBuy post by adding an appealing image and a clear caption.</li>
                <li>Review the avail requests coming from customers.</li>
                <li>Approve or cancel requests straight from the transaction chat.</li>
                <li>Once accepted, chat with the customer, mark when payment is received, and send your status updates.</li>
                <li>Mark the transaction as <strong>Completed</strong> when the item is delivered.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Analytics & History</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Regularly check your Rider Analytics to track your earnings and ratings.</li>
                <li>View your Transaction History to keep a record of all past deliveries.</li>
              </ol>
              <div className="mt-3 text-sm text-slate-600 italic">Tip: Updating your order status promptly keeps customers happy and boosts your ratings!</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Notifications & Tracking</h2>
          <p className="text-slate-700 mb-4">
            The Fetch app uses real-time notifications to keep everyone in the loop. 
          </p>
          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li><strong>Task Updates:</strong> Get notified instantly when a task is accepted, picked up, or completed.</li>
            <li><strong>PasaBuy Alerts:</strong> Receive an alert when someone avails your post or when a rider accepts your request.</li>
            <li><strong>Admin Messages:</strong> Stay informed about app changes, promotions, or account verification updates.</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Troubleshooting Quick Tips</h2>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold mr-2 text-rose-600">•</span>
              <span><strong>Not receiving notifications?</strong> Check your phone&apos;s system settings and ensure permissions for the Fetch app are enabled.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-rose-600">•</span>
              <span><strong>Location showing incorrectly?</strong> Refresh your GPS connection or share a manual pin drop inside the transaction chat.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 text-rose-600">•</span>
              <span><strong>Account pending verification?</strong> Verification usually takes a short while. ensure your uploaded IDs are clear. Watch your notifications for admin updates!</span>
            </li>
          </ul>
        </section>

        <div className="text-center bg-rose-600 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to go?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto">Open Fetch and start your first task today.</p>
          <Link href="/" className="inline-block bg-white text-rose-600 font-bold px-8 py-3 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}