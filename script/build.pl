#!/usr/bin/perl
use strict;
use warnings;

use Cwd ();
use File::Basename qw(dirname basename);
use Template ();


my $root = dirname(dirname(Cwd::abs_path($0)));
unlink glob "$root/site/*.html";

my @files = glob "$root/templates/*.tmpl";
#print "@files";

my $tt = Template->new({
        INCLUDE_PATH => "$root/templates",
        POST_CHOMP   => 1,                # cleanup whitespace
        EVAL_PERL    => 0,                # evaluate Perl code blocks
        OUTPUT_PATH  => "$root/site",
        ENCODING     => 'utf8',
    });

foreach my $tmpl (@files) {
	my $file = basename($tmpl);
	next if $file eq 'nav.tmpl' or $file eq 'footer.tmpl' or $file eq 'head.tmpl';
	print "Processing $file\n";
	(my $out = $file) =~ s/tmpl$/html/;
        my $stash = {};        
        $tt->process(
            $file,
            $stash,
            $out,
            {binmode => ':utf8'},
        ) or die $tt->error . " in $tmpl";
}
